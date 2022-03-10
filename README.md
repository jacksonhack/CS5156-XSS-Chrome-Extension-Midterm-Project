# CS5156-XSS-Chrome-Extension-Midterm-Project
A Chrome extension that tries to do some (harmless) cross site scripting to see if a site's text boxes are vulnerable

<h2>Installation Instructions:</h2>
Clone repo and follow these steps to install: https://bashvlas.com/blog/install-chrome-extension-in-developer-mode

<h2>Usage Instructions:</h2>
Welcome to XSS Tester!
This is a tool to test for XSS vulnerabilities on websites, mainly in text boxes.
This tool can be used by right-clicking in a text box on a potentially vulnerable website and selecting from the list of possible payloads:

<h3>Simple HTML Injection:</h3>
Simple HTML header injection with a red background.
If this is displayed on the webpage, it indicates vulnerability to further HTML injection.
<h3>Simple Javascript Injection:</h3>
Simple JavaScript alert injection.
If an alert is displayed, it indicates vulnerability to further and more malicious JavaScript injection.
<h3>iFrame Onload Injection:</h3>
HTML iFrame (invisible) with onload event JS that generates an alert.
This alert tries to grab the website's URL and cookies.
If this is successful, it indicates vulnerability to hidden JS in injected HTML elements.
It would also indicate that the website's information could be compromised (ex. a session cookie is stolen to login without a password)
