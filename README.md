# belly-button-challenge
Challenge 14   JavaScript Assignment

Here is a link to the dashboard: https://naseemao.github.io/belly-button-challenge/

This study explores the Belly Button Biodiversity dataset which catalogs the microbes that colonize human navels. 
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Data used for this analysis:
Sample Data used from: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
Data contains array of Names, Metadata, Samples. 
Sample_values are in ascending order in the dataset. 


Analysis: 
Identify the top 10 OTUs found in test subjects (people).

1. Horizontal Bar Chart used to plot the top 10 OTUs. 

2. Bubble Chart used to show the subject

Details: 
Horizontal Bar Chart
sample_values as the values for the bar chart.
otu_ids as the labels for the bar chart.
otu_labels as the hovertext for the chart.

Bubble Chart
otu_ids for the x values.
sample_values for the y values.
sample_values for the marker size.
otu_ids for the marker colors.
otu_labels for the text values.

Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Before You Begin
Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.

Clone the new repository to your computer.

Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.

NOTE
You will not be required to access the samples.json file locally, but it is provided for reference.

Push the above changes to GitHub.

Deploy the new repository to GitHub Pages.

Files
Download the following files to help you get started:

Module 14 Challenge filesLinks to an external site.

Instructions
Complete the following steps:

Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

bar Chart

Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

Bubble Chart

Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

hw

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

hw

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

You will need to modify the example gauge code to account for values ranging from 0 through 9.

Update the chart whenever a new sample is selected.

Weekly Washing Frequency Gauge

Hints
Use console.log inside of your JavaScript code to see what your data looks like at each step.

Refer to the Plotly.js documentationLinks to an external site. when building the plots.

Requirements
Bar Chart 
Chart initializes without error 

Chart updates when a new sample is selected 

Chart uses Top 10 sample values as values 

Chart uses otu_ids as the labels 

Chart uses otu_labels as the tooltip 

Bubble Charts 
Chart initializes without error 

Chart updates when a new sample is selected 

Chart uses otu_ids for the x values 

Chart uses otu_ids for marker colors 

Chart uses sample_values for the y values 

Chart uses sample_values for the marker size 

Chart uses `otu_labels for text values 

Metadata and Deployment 
Metadata initializes without error 

Metadata updates when a new sample is selected 

App Successfully Deployed to Github Pages 



