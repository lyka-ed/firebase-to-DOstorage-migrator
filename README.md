# DigitalOcean Storage Migrator Guide

This guide explains how to upload exported storage files (e.g., from Firebase Storage) into a DigitalOcean Spaces bucket using a Node.js script and the AWS SDK (S3-compatible).

---

## What this project does
- Connects securely to a DigitalOcean Spaces bucket using API credentials.

- Automatically reads files from a local storage-files/ directory and uploads them to your configured bucket.

- Uploads files with their original filenames and sets them as publicly accessible by default.

---

## Prerequisites
- Node.js 

- DigitalOcean storage bucket

- DigitalOcean Access Key and Secret Key

- Exported storage files placed inside a folder (e.g., from Firebase)

---

## Project Structure
firebase-to-spaces-migrator/

 - ├── .env — stores DigitalOcean credentials and bucket config

 - ├── uploadStorageFiles.js — main script to upload files

 - ├── storage-files/ — place all your exported storage files here

 - ├── package.json

 - └── node_modules/

---

## How to Run
1. Clone or prepare your project folder.

2. Install required dependencies:

    - npm install aws-sdk dotenv

3. Create a .env file and add the following with your actual values:
   - DO_ACCESS_KEY=your-access-key
   - DO_SECRET_KEY=your-secret-key
   - DO_BUCKET_ENDPOINT=.digitaloceanspaces.com
   - DO_BUCKET_NAME=your-space-name

4. Place your exported storage files inside the storage-files/ folder.

5. Run the upload script:

    - node uploadStorageFiles.js# firebase-to-DOstorage-migrator
