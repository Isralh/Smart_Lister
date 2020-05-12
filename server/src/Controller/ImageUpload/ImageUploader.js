const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const awsConfig = require('../../config/awsConfig')

aws.config.update({
  secretAccessKey: awsConfig.SecretAccessKey,
  accessKeyId: awsConfig.AccessKey,
  region: awsConfig.Region
})
const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: awsConfig.Bucket,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'houselist' })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload
