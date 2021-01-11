READ BEFORE ADDING ENTRIES TO JSON FILES:

When adding new entries to the json files, there are six data-fields to enter, some of which are required:
- id (required): The unique id of the entry. It is best to follow the convention of the other entries in the json. 
- title (required): The title of the entry.
- subtitle (optional): A small brief blurb about the entry
- date (required only for recent-updates-postings.json): The date of posting or occurence of event.
- text (optional): Main content of the entry. Note that the text data-field is an array of strings.
- images (optional): any image(s) that will be displayed with entry. Note that images data-field is an array of strings.

The id, title, subtitle, and date data-fields are all simple strings. In contrast, the text and images data-fields are arrays. 

For texts, each paragraph of the text should be a new string in the array. Unfortunately, since we are using JSON files to store data, 
text fields can only be stored as one line strings. JSON doesn't support multiline strings. I recommend typing each paragraph into a text document
or word document or etc. and copy and pasting it. 

For images, name the images in the public/img folder with a distinct name.
To include image(s) in an entry, add them as strings into array with the following format (name of file goes in {}): 
"img/{name of file including file type}"
If no image is added, then the entry will not display any image.
If one image is added, then the entry will display the image.
If there are two or more images, the entry will display the images as a slideshow (with the exception of recent-updates-postings.json)

Though not necessary, try to preserve correct ordering of the entry data-fields to keep documents organized. 

If need assistance, try to refer to previous entries as examples or reach out to me (David).

The following is an example of an empty entry:
{
    "id": "",
    "title": "",
    "subtitle": "",
    "date": "",
    "text": [],
    "images": []
}

The following is an example of a valid entry
{
    "id": "rp-2",
    "title": "Recent Postings Title 2",
    "subtitle": "Paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "date": "January 17th, 2020",
    "text": [
        "Paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Paragraph 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
    "images": [
        "img/community.jpg",
        "img/about-us.JPG"
    ]
}