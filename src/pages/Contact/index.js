"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building2 } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    setTimeout(() => {
      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@haapnet.org",
      secondary: "We typically respond within 24 hours",
      color: "blue",
      link: "mailto:info@haapnet.org"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+254 700 000 000",
      secondary: "Monday - Friday, 8AM - 5PM EAT",
      color: "green",
      link: "tel:+254700000000"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Nairobi, Kenya",
      secondary: "East Africa Regional Office",
      color: "purple",
      link: null
    }
  ]

  const offices = [
    {
      title: "Main Office",
      location: "Nairobi, Kenya",
      phone: "+254 700 000 000",
      email: "nairobi@haapnet.org"
    },
    {
      title: "Regional Hub",
      location: "Kampala, Uganda",
      phone: "+256 700 000 000",
      email: "kampala@haapnet.org"
    },
    {
      title: "Training Center",
      location: "Dar es Salaam, Tanzania",
      phone: "+255 700 000 000",
      email: "daressalaam@haapnet.org"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Whether you're interested in partnering, volunteering, or simply learning more about our mission, we're here to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-10">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                    <div className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(method.color)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    
                    {method.link ? (
                      <a href={method.link} className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors block mb-2">
                        {method.primary}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-gray-800 mb-2">{method.primary}</p>
                    )}
                    
                    <p className="text-sm text-gray-600 leading-relaxed">{method.secondary}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Send a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="partnership">Partnership Proposal</option>
                        <option value="donation">Donation & Support</option>
                        <option value="programs">Program Information</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <p className="text-green-800 font-semibold">✓ Message sent successfully!</p>
                      <p className="text-green-700 text-sm mt-1">We'll respond within 24 hours.</p>
                    </motion.div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Office Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">East Africa Time (EAT)</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Quick Response</h3>
                    <p className="text-sm text-green-100">Chat with us now</p>
                  </div>
                </div>
                <p className="text-green-50 text-sm mb-4 leading-relaxed">
                  Need an immediate response? Message us on WhatsApp and we'll get back to you right away.
                </p>
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-5 py-3 rounded-xl hover:bg-green-50 transition-colors w-full justify-center"
                >
                  Open WhatsApp
                  <Send className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Follow Our Journey</h3>
                <div className="flex gap-3">
                  <a href="#" className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="flex-1 h-12 bg-sky-500 hover:bg-sky-600 rounded-xl flex items-center justify-center text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="flex-1 h-12 bg-blue-700 hover:bg-blue-800 rounded-xl flex items-center justify-center text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We operate across East Africa with offices and training centers in multiple countries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{office.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                    {office.location}
                  </p>
                  <p className="flex items-start gap-2 text-gray-600">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                    {office.phone}
                  </p>
                  <p className="flex items-start gap-2 text-gray-600">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                    {office.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.97691312193!2d36.70730555!3d-1.302133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2283900c3%3A0x5a0c5e8a1e32b3fc!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HAAPNET Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join us in transforming communities across Africa. Every contribution creates lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/get-involved"}
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all hover:scale-105"
              >
                Get Involved
              </button>
              <button
                onClick={() => window.location.href = "/donate"}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all hover:scale-105"
              >
                Support Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact