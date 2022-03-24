import React from 'react'
import Head from 'next/head'

interface IHead {
  children?: React.ReactNode
}

function HtmlHead({ children }: IHead) {
  return (
    <Head>
      <title data-testid="title-element">Awards 2021</title>
      <meta name="description" content="This is the Awards 2021 web app" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="This is the Awards 2021 web app" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="This is the Awards 2021 web app"
      />
      <meta
        property="og:image"
        content="http://euro-travel-example.com/thumbnail.jpg"
      />
      <meta
        property="og:url"
        content="http://euro-travel-example.com/index.htm"
      />
      <meta
        name="twitter:card"
        content="Select the nominees for the Awards 2021 web app."
      ></meta>
      {children}
    </Head>
  )
}

export default HtmlHead
