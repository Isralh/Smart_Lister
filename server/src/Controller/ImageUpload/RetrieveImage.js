const aws = require('aws-sdk')
const awsConfig = require('../../config/awsConfig')

const retrieve = async () => {
  try {
    aws.config.update({
      accessKeyId: awsConfig.AccessKey,
      secretAccessKey: awsConfig.SecretAccessKey,
      region: awsConfig.Region
    })

    const s3 = new aws.S3()
    const response = await s3.listObjectsV2({
      Bucket: 'the-smith-group',
      Prefix: '1051 Fruitville Pike'
    }).promise()
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

retrieve()
