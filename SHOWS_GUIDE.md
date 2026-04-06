# How to add or edit shows on the website

The shows list lives in one file on GitHub. You don't need to install anything — just log in and edit it in your browser.

## Step 1: Log in to GitHub

Go to **https://github.com** and log in with the **sfc-band** account (ask Nancy for the password).

## Step 2: Open the shows file

Click this link to go directly to the file:

**https://github.com/spoiltforchoice-au/spoiltforchoice-au.github.io/blob/main/src/data/shows.json**

## Step 3: Click the edit button

Click the **pencil icon** (✏️) near the top-right of the file. This opens an editor in your browser.

## Step 4: Edit the shows

The file looks like this:

```json
{
  "shows": [
    {
      "date": "18/03/2026",
      "venue": "George Harcourt Inn",
      "city": "Nicholls",
      "state": "ACT",
      "mapsLink": "https://maps.app.goo.gl/..."
    }
  ]
}
```

**To add a new show**, copy an existing block (from `{` to `}`) and paste it inside the `"shows": [ ... ]` list, separated by a comma. Change the details.

**To remove a show**, delete the entire block for that show (from `{` to `}`, including the comma before or after it).

The website will automatically figure out whether a show is upcoming or past — you don't need to worry about that.

## Fields

| Field | Required? | Example |
|---|---|---|
| `date` | Yes | `"25/12/2026"` — must be DD/MM/YYYY |
| `venue` | Yes | `"George Harcourt Inn"` |
| `city` | Yes | `"Nicholls"` |
| `state` | No | `"ACT"` |
| `mapsLink` | No | Google Maps share link |
| `ticketLink` | No | Link to buy tickets, or `"TBA"` |

## Step 5: Save your changes

Scroll to the bottom of the page and click **"Commit changes"**. You can leave the default message. The website will automatically update within a few minutes.

> **Tip:** Don't worry if you make a mistake — all changes are saved in history and can be undone.
