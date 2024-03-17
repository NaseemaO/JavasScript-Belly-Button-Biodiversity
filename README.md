# JavaScript Project. Belly Button Biodiversity

## Webpage / Dashboard: https://naseemao.github.io/belly-button-challenge/

### Overview: 
An interactive dashboard is built that explores the Belly Button Biodiversity dataset which catalogs the microbes that colonize human navels. 
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
User may select the Test Subject ID No. from the dropdown menu, and view the Demographic information for the selected Subject. 
Information displayed in the Demographic Info for selected Test Subject ID consists of: Subject ID, Ethnicity, Gender, Age, Location, belly Button Type, and Washing Frequency. 
Top 10 OTUs found represented and their amounts represented in the bar, bubble and guage Charts.

#### Visualizations:
The Bar chart shows the top 10 microbial species aka OTU found in this selected Subject's sample. 
The Bubble chart shows the amount of each of the 10 OTUs found in the sample

### Files:
Located in my git hub repository https://github.com/NaseemaO/belly-button-challenge
Data file: sample.json

code files:
html file: index.html
app.js and bonus.js in the Static/js folder.  The app.js is the code file for the dropdown menu, demographic inforation of the subject selected, and the visualizaions: Bar and Bubble Charts. 
The bonus file is code for the Gauge chart plot. 

Images in Images folder with pictures of the default/ 1st Sample ID 940.  

### Study: 
D3 library used to read in data from samples.json from url: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
Data contains array of Names, Metadata, Samples. 
Sample_values are in ascending order in the dataset. 

### Analysis: 
Identified the top 10 OTUs found in test subjects (people).
1. Horizontal Bar Chart used to plot the top 10 OTUs. 
2. Bubble Chart used to show the subject
3. Gauge Chart plots the subject's washing frequency of the naval. 

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

Sample metadata used to display the Subject's demographic information.

Bar, Bubble and Gauge plots are updated for the dowpdown menu selection for the selected Test Subject ID.

The Gauge plot is the otpitonal /bonus in this assignment. 
The Gauge Chart adapted from https://plot.ly/javascript/gauge-charts/Links to an external site to plot the weekly washing frequency of the individual.
Gauge code to account for values ranging from 0 through 9.

### References: 
Plotly.js documentationLinks to an external site. when building the plots.
https://www.w3schools.com/tags/tag_select.asp

### Acknowledgments: Bootcamp Course Data Visualization and Data Analytics Instructor: Hunter Hollis, TAs: Sam Espe and Randy Sendek, and Tutors. 



