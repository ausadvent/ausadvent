// Import mjml
const mjml2html = require('mjml');

const { SendEmailCommand } = require("@aws-sdk/client-ses")
const {SESClient } = require("@aws-sdk/client-ses")
// Set AWS region
const REGION = "ap-southeast-2"
// Create SES service object
const sesClient = new SESClient({ region: REGION })

// Image URL
const imgUrl = "https://main.d3p5eyiswg8e5l.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d675feb7.png&w=32&q=75"

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const parsedBody = JSON.parse(event.body);

    // Mail template for customers
    const mjmlTemplate = `
        <mjml>
            <mj-head>
                <mj-title>Your quote request</mj-title>
                <mj-font name="Quantico" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
                <mj-attributes>
                    <mj-text font-family="Quantico, sans-serif" />
                <mj-class name="phone" />
                </mj-attributes>
            </mj-head>
            <mj-body>
                <mj-section background-color="#1F2937">
                    <mj-column>
                        <mj-image src=${imgUrl} alt="Ausadvent logo" align="center" width="99px" padding="0"></mj-image>
                    </mj-column>
                </mj-section>
                <mj-section padding-top="32px" padding-left="16px" padding-right="16px" padding-bottom="16px" >
                    <mj-text font-size="16px">Hello ${parsedBody.firstName} <br/><br/><br/></mj-text>
                    <mj-text font-size="16px">Thank you for contacting us at Ausadvent. We have received your message and appreciate your interest in our services.<br/><br/></mj-text>
                    <mj-text font-size="16px">Our team will review your inquiry and get back to you as soon as possible. If you have any urgent matters, please feel free to contact us directly at 0439430007.<br/><br/></mj-text>
                    <mj-text font-size="16px">We look forward to the opportunity to serve you and provide exceptional support for your needs.<br/><br/><br/></mj-text>
                
                    <mj-text font-size="16px" >Best regards,<br/><br/></mj-text>
                    <mj-text font-size="16px" >Ausadvent Team.<br/><br/></mj-text>
                    <mj-section padding-left="40px" padding-right="30px"> 
                        <mj-divider border-color="#1E40AF" border-width="2px"></mj-divider>
                    </mj-section>
                    <mj-section padding="0">
                        <mj-wrapper padding="0" display="flex"  >
                            <mj-column mj-class="phone" vertical-align="middle">
                                <mj-text color="#262626" align="center">+61 439 430 007</mj-text>
                            </mj-column>
                            <mj-column vertical-align="middle">
                                <mj-text align="center">Australia</mj-text>
                            </mj-column>
                        </mj-wrapper>
                    </mj-section>
                </mj-section>
                    
            </mj-body>
        </mjml>
    `;

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlTemplate);

    const createSendEmailCommand = (toAddress, fromAddress) => {
        return new SendEmailCommand({
            Destination: {
                CcAddresses: [],
                ToAddresses: [
                    toAddress
                ]
            },
            Message: {
                Body: {
                    /* required */
                    Html: {
                      Charset: "UTF-8",
                      Data: html,
                    },
                    Text: {
                      Charset: "UTF-8",
                      Data: `The person ${parsedBody.firstName}`,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: "Your quote request",
                },
            },
            Source: fromAddress
        })
    }

    const sendEmailCommand = createSendEmailCommand(
        `${parsedBody.values.email}`,
        "bytechodigital@gmail.com"
    );

    try {
        const result = await sesClient.send(sendEmailCommand)
        console.log('Result mail to cx', result);
        console.log('client mail', parsedBody)

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
           },
           body: JSON.stringify({status: 200}),
        }
    } catch (error) {
        console.error('error', error)
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
};
