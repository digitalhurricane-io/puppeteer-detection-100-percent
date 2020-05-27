# Detect Puppeteer With 100% Accuracy

This is an example of how to detect puppeteer with 100% accuracy.

By replacing a native browser function which puppeteer uses, in this case, document.querySelector, we can
throw an error to detect the script being run.

You can see this line:
https://github.com/puppeteer/puppeteer/blob/7eab7f8dd9838489432882bedee5a9d3df66aa2c/src/ExecutionContext.ts#L24

The script name that puppeteer runs is called __puppeteer_evaluation_script__

```
export const EVALUATION_SCRIPT_URL = '__puppeteer_evaluation_script__';

```

By throwing an error and checking for this script name, puppeteer can be detected with 100% accuracy.

As far as I know, I am the first to report on this.

In order to prevent this, you need to fork the library, and change the name of the script ("__puppeteer_evaluation_script__") to something else.

## How to use this demo
Run the public folder using a local server, this server will do the trick https://www.npmjs.com/package/http-server

Install deps with yarn.

Run with "yarn start"

When puppeteer types in the text box, it will be detected. The word "yes" will be displayed.

When you visit the liveserver page manually in your normal browser, and type in the text box, it will still say "no"
