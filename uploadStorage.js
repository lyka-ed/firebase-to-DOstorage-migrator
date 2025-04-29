const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const digitalEndpoint = new AWS.Endpoint(process.env.DO_BUCKET_ENDPOINT);
const s3 = new AWS.S3({
    endpoint: digitalEndpoint,
    accessKeyId: process.env.DO_ACCESS_KEY,
    secretAccessKey: process.env.DO_SECRET_KEY
});

// Directory where thenlocal Firebase-exported storage files are saved
const storageFolder = path.join(__dirname, 'storage');

async function uploadFiles() {
    const files = fs.readdirSync(storageFolder);

    for (const file of files) {
        const filePath = path.join(storageFolder, file);
        const params = {
            Bucket: process.env.DO_BUCKET_NAME,
            Key: file,
            Body: fs.createReadStream(filePath),
            ACL: 'public-read' 
        };

        try {
            const result = await s3.upload(params).promise();
            console.log(`Uploaded: ${file} → ${result.Location}`);
        } catch (err) {
            console.error(`Failed to upload ${file}:`, err.message);
        }
    }
}

uploadFiles();
