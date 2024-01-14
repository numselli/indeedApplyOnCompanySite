# indeedApplyOnCompanySite
## Bring back Indeed apply on company site button

## The problem
Indeed previously showed diffrent apply buttons for applying to jobs:
- `Apply On Company Site` for postings that would redirect to a diffrent site
- `Apply Now` for jobs that could be applied to directly on Indeed.

Recently Indeed changed this behaviour so both buttons will show `Apply Now`.

## The solution
This [Tampermonkey](https://www.tampermonkey.net/) script adds four configurable actions to occur when opening a `Apply On Company Site` posting:
- addRedWarningBar
    - Adds a red bar at the top of the page to identify `Apply On Company Site` postings faster
    - Defualt: Enabled
- autoOpenCompanySite
    - Automatically redirects tab to the `Company Site`
    - Defualt: Disabled
- renameButon
    - Renames `Apply Now` to `Apply On Company Site`
    - Defualt: Enabled
- autoCloseTab
    - Automatically closes the tab if the job posting is an `Apply On Company Site` posting
    - Defualt: Disabled

## How to install
1) Install [Tampermonkey](https://www.tampermonkey.net/) for [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2) Navigate to Tampermonkey's settings
3) Click on the `Utilities` tab
4) At the bottom paste `https://raw.githubusercontent.com/numselli/indeedApplyOnCompanySite/main/indeedApplyOnCompanySite.js` it to the `Import from URL`
5) Click install
6) If you wish to change the scripts behaviour from the defualt follow the **How to configure** section below


## How to configure
At the top of the file you will see 
```js
const addRedWarningBar = true;
const autoOpenCompanySite = false;
const renameButon = true;
const autoCloseTab = false;
```
If you wish to disable a feature then change `true` to `false` and vice versa (`false` to `true` to enable)