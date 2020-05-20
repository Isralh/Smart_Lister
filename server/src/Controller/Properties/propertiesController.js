const Properties = require('../../models/properties')
// const { v4: uuidv4 } = require('uuid')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const awsConfig = require('../../config/awsConfig')
exports.propertyInfo = async (req, res) => {
  const data = await req.body
  try {
    res.status(200).send(data)
  } catch (e) {
    console.log(e)
  }
  console.log(data)
}

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

const singleUpload = upload.array('images')
exports.imageupload = async (req, res) => {
  singleUpload(req, res, err => {
    if (err) console.log(err)
    return res.status(200).send(req.file.location)
  })
}
