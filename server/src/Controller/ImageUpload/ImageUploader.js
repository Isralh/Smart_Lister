const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const awsConfig = require('../../config/awsConfig')

aws.config.update({
  secretAccessKey: awsConfig.secretAccessKey,
  accessKeyId: awsConfig.accessKeyId,
  region: awsConfig.region
})
const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: awsConfig.bucketName,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'houseImage' })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload
