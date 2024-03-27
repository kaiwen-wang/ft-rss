<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Styled RSS Feed</title>
        <style>
          body {
          font-family: Arial, sans-serif;
          margin: 20px;
          }
          h1 {
          color: #333;
          }
          ul {
          list-style-type: none;
          padding: 0;
          }
          li {
          margin-bottom: 10px;
          }
          a {
          color: #007bff;
          text-decoration: none;
          }
        </style>
      </head>
      <body>
        <h1>
          <xsl:value-of select="rss/channel/title" />
        </h1>
        <p>
          <xsl:value-of select="rss/channel/description" />
        </p>
        <ul>
          <xsl:for-each select="rss/channel/item">
            <li>
              <a href="{link}">
                <xsl:value-of select="title" />
              </a>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>