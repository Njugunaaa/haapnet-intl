import fs from 'fs/promises';
import path from 'path';

const projectRoot = process.cwd();

const filesToDelete = [
  'vite.config.mjs',
  'vite.config.js',
  'index.html', // Vite's entry point
  path.join('src', 'App.jsx'), // Your specific root component
  path.join('pages', '[...all].js'), // The previous workaround file
];

const packagesToRemove = [
  'vite',
  '@vitejs/plugin-react',
  'react-router-dom',
  'framer-motion', // Remove if only used for react-router-dom transitions
];

async function removeVite() {
  console.log('Starting cleanup process...');

  // --- Step 1: Remove files from the file system ---
  for (const file of filesToDelete) {
    const filePath = path.join(projectRoot, file);
    try {
      await fs.unlink(filePath);
      console.log(`- Removed file: ${file}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // File does not exist, which is fine
        console.log(`- File not found (skipping): ${file}`);
      } else {
        console.error(`- Error removing file ${file}:`, error);
      }
    }
  }

  // --- Step 2: Update package.json to remove dependencies ---
  try {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));

    // Remove from dependencies and devDependencies
    for (const pkg of packagesToRemove) {
      if (packageJson.dependencies && packageJson.dependencies[pkg]) {
        delete packageJson.dependencies[pkg];
        console.log(`- Removed dependency: ${pkg}`);
      }
      if (packageJson.devDependencies && packageJson.devDependencies[pkg]) {
        delete packageJson.devDependencies[pkg];
        console.log(`- Removed devDependency: ${pkg}`);
      }
    }
    
    // Update scripts
    if (packageJson.scripts) {
        if (packageJson.scripts.dev && packageJson.scripts.dev.includes('vite')) {
            packageJson.scripts.dev = 'next dev';
            console.log('- Updated "dev" script.');
        }
        if (packageJson.scripts.build && packageJson.scripts.build.includes('vite')) {
            packageJson.scripts.build = 'next build';
            console.log('- Updated "build" script.');
        }
    }
    
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('- Updated package.json');

  } catch (error) {
    console.error('Error updating package.json:', error);
  }

  // --- Step 3: Run npm install to clean up node_modules ---
  try {
    console.log('\nRunning npm install to clean up dependencies...');
    const { exec } = await import('child_process');
    exec('npm install', (err, stdout, stderr) => {
      if (err) {
        console.error('Error running npm install:', stderr);
        return;
      }
      console.log(stdout);
      console.log('Cleanup complete! Now run `npm run dev` to start your Next.js project.');
    });
  } catch (error) {
    console.error('Error running npm install:', error);
  }
}

removeVite();