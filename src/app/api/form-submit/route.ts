import { NextRequest, NextResponse } from 'next/server'

const apiGatewayEndpoint = process.env.AUSADVENT_QUOTES_ENDPOINT
const apiKey = process.env.API_KEY

export async function POST(request: NextRequest) {
  if (!apiGatewayEndpoint || !apiKey) {
    console.error('Form proxy: missing required env vars')
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const endpoint = `${apiGatewayEndpoint.replace(/\/$/, '')}/items`

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify(body),
    })

    const responseBody = await response.text()

    return new NextResponse(responseBody, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'application/json',
      },
    })
  } catch (error) {
    console.error('Form proxy: unexpected error', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
