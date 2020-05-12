const express = require('express')
const router = express.Router()
const Properties = require('../../models/properties')
const aws = require('aws-sdk')
const awsConfig = require('../../config/awsConfig')

// create connection with aws
aws.config.update({
  accessKeyId: awsConfig.AccessKey,
  secretAccessKey: awsConfig.SecretAccessKey,
  region: awsConfig.Region
})

router.get('/allProperties', async (req, res) => {
  // retrieve from DB all the properties data
  const allProperties = await Properties.findAll({ raw: true })

  // // create an insitance of aws
  // const s3 = new aws.S3()
  // const response = await s3.listObjectsV2({
  //   Bucket: 'the-smith-group'
  //   // Prefix: 'the_smith_group'
  // }).promise()
  try {
    // const imageKey = response.Contents
    allProperties ? res.status(200).send({ message: 'success', data: allProperties }) : res.status(404).send({ message: 'unable to find data' })
    // allProperties ? res.status(200).send({ data: [allProperties, response] }) : res.status(404).send({ message: 'unable to find data' })
  } catch (e) {
    res.status(404).send({ message: 'there has been network propblems' })
    console.log({ 'My Error': e })
  }
})

module.exports = router
