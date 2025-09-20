// src/components/EventsPageSkeleton.js
import React from 'react';
import styles from './PageSkeleton.module.css';

const EventsPageSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      {/* Header section with gradient background */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={`${styles.skeletonLine} ${styles.titleSkeleton}`}></div>
          <div className={`${styles.skeletonLine} ${styles.subtitleSkeleton}`}></div>
          <div className={`${styles.skeletonLine} ${styles.subtitleSkeletonShort}`}></div>
        </div>
      </div>

      {/* Navigation tabs section */}
      <div className={styles.navSection}>
        <div className={styles.navContent}>
          <div className={styles.tabsContainer}>
            <div className={`${styles.tabSkeleton} ${styles.activeTab}`}></div>
            <div className={styles.tabSkeleton}></div>
            <div className={styles.tabSkeleton}></div>
            <div className={styles.tabSkeleton}></div>
            <div className={styles.tabSkeleton}></div>
          </div>
          <div className={styles.viewToggleContainer}>
            <div className={styles.viewToggleSkeleton}></div>
            <div className={styles.viewToggleSkeleton}></div>
          </div>
        </div>
      </div>

      {/* Content section placeholder */}
      <div className={styles.contentSection}>
        <div className={styles.contentPlaceholder}>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={`${styles.skeletonLine} ${styles.shortLine}`}></div>
        </div>
      </div>
    </div>
  );
};

export default EventsPageSkeleton;