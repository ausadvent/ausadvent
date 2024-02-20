// Import mjml
const mjml2html = require('mjml');

const { SendEmailCommand } = require("@aws-sdk/client-ses")
const {SESClient } = require("@aws-sdk/client-ses")
// Set AWS region
const REGION = "ap-southeast-2"
// Create SES service object
const sesClient = new SESClient({ region: REGION })

// Image URL
const imgUrl = "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const parsedBody = JSON.parse(event.body);


    try {
        const resToClient = await sendMailToCustomers(parsedBody)
        console.log('sending mail to client', resToClient)
        
        const resToAu = await sendMailToAu(parsedBody)
        console.log('sending mail to Ausadvent', resToAu)

        if(resToClient && resToAu) {
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: JSON.stringify({ status: 200 }),
            };
        } else {
            throw new Error('sending failed')
        }
         
    } catch (error) {
        console.error('error', error)
        
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
};

// Function that sends email to customers
const sendMailToCustomers = async(body) => {
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
            <mj-section>
                <mj-column>
                    <mj-image src=${imgUrl} alt="Ausadvent logo" align="center" width="79px" padding="0"></mj-image>
                </mj-column>
            </mj-section>
            <mj-section> 
                <mj-divider border-color="#F59E0B" border-width="1px"></mj-divider>
            </mj-section>
            <mj-section padding-top="32px" padding-left="16px" padding-right="16px" padding-bottom="16px" >
                <mj-text font-size="16px"><strong>Hello ${body.values.firstName}, </strong> <br/><br/><br/></mj-text>
                <mj-text font-size="16px">Thank you for contacting us at Ausadvent. We have received your message and appreciate your interest in our services.<br/><br/></mj-text>
                <mj-text font-size="16px">Our team will review your inquiry and get back to you as soon as possible. If you have any urgent matters, please feel free to contact us directly at <a href="tel:+61439430007" style="text-decoration: none; color: #000000;  font-weight: bold;"> +61 0439 430 007 </a>.<br/><br/></mj-text>
                <mj-text font-size="16px">We look forward to the opportunity to serve you and provide exceptional support for your needs.<br/><br/><br/></mj-text>
            
                <mj-text font-size="16px" >Best regards,<br/><br/></mj-text>
                <mj-text font-size="16px" >Ausadvent Team.<br/><br/></mj-text>
                <mj-section padding-left="10px" padding-right="10px"> 
                    <mj-divider border-color="#F59E0B" border-width="1px"></mj-divider>
                </mj-section>
                <mj-section padding="0">
                    <mj-wrapper padding="0" display="flex"  >
                        <mj-column mj-class="phone" vertical-align="middle">
                        <mj-text color="#2563EB" align="center">P: <a href="tel:+610731213060" style="text-decoration: none; ">+61 (07) 3121 3060 </a> | <a href="tel:+61439430007" style="text-decoration: none; "> M: +61 0439 430 007 </a> </mj-text>
                            <mj-text align="center">Building 6, 2404 Logan Road, Eight Miles Plain QLD 4113</mj-text>
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
                      Data: `The person ${body.values.firstName}`,
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
        `${body.values.email}`,
        // Change it for the CX email address
        "bytechodigital@gmail.com"
    );

    try {
        const resultForClients = await sesClient.send(sendEmailCommand)
        console.log('Result mail to cx', resultForClients);

        return {
            statusCode: 200
        }
    } catch (error) {
        console.error('error', error)
    }
}

// Function that sends email to Ausadvent
const sendMailToAu = async(body) => {
    const mjmlTemplateToAu = `
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
                <mj-section>
                    <mj-column>
                        <mj-image src=${imgUrl} alt="Ausadvent logo" align="center" width="79px" padding="0"></mj-image>
                    </mj-column>
                </mj-section>
                <mj-section> 
                    <mj-divider border-color="#F59E0B" border-width="1px"></mj-divider>
                </mj-section>
                <mj-section padding-top="32px" padding-left="16px" padding-right="16px" padding-bottom="16px" >
                    <mj-text font-size="16px">Hello Ausadvent team, <br/><br/><br/></mj-text>
                    <mj-text font-size="16px">The person ${body.values.firstName} ${body.values.lastName} wants to get in touch and left you the following message:<br/><br/></mj-text>
                    <mj-text font-size="16px">"${body.values.message}"<br/><br/></mj-text>
                    <mj-text font-size="16px">His/her email address is ${body.values.email} and contact number ${body.values.phoneNumber}. <br/><br/></mj-text>
                
                    <mj-text font-size="16px" >Best regards,<br/><br/></mj-text>
                    <mj-text font-size="16px" >Ausadvent Team.<br/><br/></mj-text>
                    
                    <mj-section padding-left="40px" padding-right="30px"> 
                        <mj-divider border-color="#F59E0B" border-width="2px"></mj-divider>
                    </mj-section>
                    <mj-section padding="0">
                        <mj-wrapper padding="0" display="flex"  >
                            <mj-column mj-class="phone" vertical-align="middle">
                            <mj-text color="#2563EB" align="center">P: <a href="tel:+610731213060" style="text-decoration: none; ">+61 (07) 3121 3060 </a> | <a href="tel:+61439430007" style="text-decoration: none; "> M: +61 0439 430 007 </a> </mj-text>
                                <mj-text align="center">Building 6, 2404 Logan Road, Eight Miles Plain QLD 4113</mj-text>
                            </mj-column>
                        </mj-wrapper>
                    </mj-section>
                </mj-section>
                            
            </mj-body>
        </mjml>
    `;

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlTemplateToAu);

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
                      Data: `The person ${body.values.firstName}`,
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
        // Change it for the CX email address
        "bytechodigital@gmail.com",
        `${body.values.email}`,
    );

    try {
        const resultForAusadvent = await sesClient.send(sendEmailCommand)
        console.log('Result mail to cx', resultForAusadvent);

        return {
            statusCode: 200
        }
    } catch (error) {
        console.error('error', error)
    }
}