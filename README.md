# 🏥 SecureHealth AI Vault

**DPDP & ABDM Compliant Patient Health Vault with AI-Powered Analysis**

> Encrypted medical records, instant specialist consultations, AI-powered health insights, and emergency record sharing—all in one secure platform. Built with Next.js 15, Express, Firestore, and Polygon blockchain.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Deploy Status](https://img.shields.io/badge/deploy-ready-blue)]()

---

## 🎯 Quick Links

- **GitHub Repository:** https://github.com/varshith0011/securehealth-ai-vault
- **Firebase Project:** health-vault-3fa27
- **Live Demo:** (Deploy to Vercel & Railway)
- **Documentation:** See [SETUP.md](./SETUP.md) for detailed setup guide

---

## ✨ Key Features

### 🔐 Security & Compliance
- **DPDP Act 2023:** Full patient consent management & data residency in India (asia-south1)
- **ABDM Integration:** ABHA health IDs, FHIR bundles, HFR/HPR sync
- **End-to-End Encryption:** AES-256 for all sensitive health data
- **Blockchain Audit:** Polygon Mumbai audit trail for record access
- **72-Hour Breach Notification:** Automatic alerts for security incidents

### 📱 Patient-Centric UX
- **Aadhaar/OTP Login:** Biometric & phone-based authentication
- **Records Vault:** Unified timeline (X-rays, prescriptions, labs, consult notes)
- **OCR Scanner:** Auto-extract handwritten prescriptions
- **Offline Mode:** Access records without internet (syncs when online)
- **Family Profiles:** Multi-user support for elderly & children

### 🤖 AI Health Intelligence
- **Report Explanations:** "Explain my report" in Telugu/English/Hindi with voice output
- **Risk Flagging:** Red/Yellow/Green badges for critical findings
- **Personalized Diet Plans:** Local Indian foods (idli, ragi, sambar) based on conditions
- **Predictive Alerts:** Upcoming lab due dates, medication schedules
- **Powered by:** Google Vertex AI (Gemini 2.0 Flash)

### 💬 Teleconsultation
- **Emergency Specialist Consult:** 1-tap access to cardiologists, neurologists, etc.
- **Instant Video Calls:** Jitsi Meet integration
- **Auto-Record Sharing:** Emergency bundle (allergies, labs, vitals) automatically available
- **Razorpay Payments:** Secure INR payments for consultations

### 🏥 Diagnostic Center Finder
- **Radius-Based Search:** Find labs within 1-20 km
- **Cost Filtering:** Budget-friendly options with indicative pricing
- **Test-Type Filters:** CBC, MRI, CT scans, etc.
- **ABDM HFR Integration:** Official facility registry

### 📊 Health Dashboard
- **Health Score Card:** 0-100 trend tracking
- **Vitals Tracker:** BP, blood sugar, weight, steps
- **Wearable Sync:** Google Fit, Apple Health integration
- **Gamification:** Badges, streaks, leaderboards

---

## 🏗️ Tech Stack

| Component | Technology | Deployment |
|-----------|-----------|-------------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, Framer Motion | Vercel |
| **Backend** | Node.js, Express, TypeScript | Railway |
| **Database** | Firebase Firestore (asia-south1) + Cloud Storage | Firebase |
| **Auth** | Firebase Auth + Aadhaar eKYC | Firebase |
| **AI** | Google Vertex AI (Gemini 2.0 Flash) | Google Cloud |
| **Blockchain** | Polygon Mumbai | Public Testnet |
| **Payments** | Razorpay (INR) | Live |
| **Teleconsult** | Jitsi Meet | Self-hosted/Cloud |
| **Mobile** | Next.js PWA + React Native (EAS/Expo) | Play Store |

---

## 📋 Project Status

✅ **Firebase Infrastructure** - COMPLETE (Firestore + Auth in asia-south1)  
🔄 **Backend API Development** - IN PROGRESS  
⏳ **Frontend Development** - PENDING  
⏳ **ABDM Integration** - PENDING  
⏳ **APK Build & Release** - PENDING  

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm/yarn
- Firebase Account (free tier OK)
- Google Cloud Account (free tier OK)

### Installation

```bash
# Clone the repo
git clone https://github.com/varshith0011/securehealth-ai-vault.git
cd securehealth-ai-vault

# Backend setup
cd backend
npm install
cp .env.example .env.local
# Edit .env.local with your Firebase & API keys
npm run dev

# Frontend setup (new terminal)
cd ../frontend
npm install
echo 'NEXT_PUBLIC_FIREBASE_API_KEY=...' > .env.local
npm run dev
```

Visit: http://localhost:3000 (frontend) & http://localhost:5000 (backend)

---

## 📖 Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide with Firebase credentials
- **[API.md](./API.md)** - Backend API reference (auth, records, AI, payments)
- **[DEPLOY.md](./DEPLOY.md)** - Deployment to Vercel + Railway
- **[APK.md](./APK.md)** - Building Android APK with EAS/Expo
- **[COMPLIANCE.md](./COMPLIANCE.md)** - DPDP/ABDM compliance details

---

## 👨‍💻 Contributing

Contributions welcome! Please:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License - See [LICENSE](./LICENSE) file for details

---

## 🤝 Support

- **Issues:** GitHub Issues tab
- **Email:** support@securehealthvault.in
- **Docs:** Full documentation in `/docs` folder

---

## 🙏 Acknowledgments

- DPDP Act 2023 guidance
- ABDM (Ayushman Bharat Digital Mission)
- Firebase & Google Cloud
- Polygon Foundation
- Open source community

---

**Last Updated:** March 6, 2026  
**Status:** Active Development  
**Maintainer:** Varshith0011
