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

// configure s3 for image upload
aws.config.update({
  accessKeyId: awsConfig.AccessKey,
  secretAccessKey: awsConfig.SecretAccessKey,
  region: awsConfig.Region
})

// create a new Instant of S3
const s3 = new aws.S3()
exports.upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: awsConfig.Bucket,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, req.s3Key)
    }
  })
})

// const singleFileUpload = upload.single('image')

// async function uploadtoS3 (req, res) {
//   req.s3Key = Date.now().toString()
//   const imageUrl = `https://${awsConfig.Bucket}.s3.amazonaws.com/${req.body.houseImage}`

//   return new Promise((resolve, reject) => {
//     return singleFileUpload(req, res, err => {
//       if (err) return reject(err)
//       return resolve(imageUrl)
//     })
//   })
// }
// exports.propertyImages = async (imageUpload, req, res) => {
//   console.log(imageUpload.body.houseImage)
// }
