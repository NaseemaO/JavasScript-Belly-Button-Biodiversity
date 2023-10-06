// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize the webpage dashboard 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down choices
    d3.json(url).then((data) => {
        
        // Set a variable for the sample names
        let names = data.names;

        // Add sample names to dropdown menu
        names.forEach((sample) => {

            // Log the value of id for each iteration of the loop
            console.log(sample);

            dropdownMenu.append("option")
            .text(sample)
            .property("value",sample);
        });

        // Set the first sample from the list
        let sampleOne = names[0];

        // Log the value of sample_one
        console.log(sampleOne);

        // Build the initial plots using the first default sample
        buildMetadata(sampleOne);
        buildBarChart(sampleOne);
        buildBubbleChart(sampleOne);
        buildGaugeChart(sampleOne);
    });
};

// Function that updates dashboard when sample is changed. Fetch new data each time a new sample is selected
function optionChanged(value) { 

    // Log the new value
    console.log(value); 

    // Call all functions 
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
    buildGaugeChart(value);

};

// Function that populates metadata info
function buildMetadata(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.metadata;

        // Filter based on the value of the sample
        let value = metadata.filter(result => result.id == sample);

        // Log the array of metadata objects after the have been filtered
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Clear out metadata
        d3.select("#sample-metadata").html("");

        // Use Object.entries to add each key/value pair to the panel
        Object.entries(valueData).forEach(([key,value]) => {

            // Log the individual key/value pairs as they are being appended to the metadata panel
            console.log(key,value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

};

//  Hortizontal Bar Chart
function buildbarCharts(sample) {
//  get data.samples in a variable 
    d3.json(url).then((data) => {
        let samplesArray = data.samples;
        console.log(samplesArray)
// filter for the sample
        let filtered = samplesArray.filter(sampleObject => sampleObject.id == sample);
        console.log(filtered)

        let metadata = data.metadata;
        let filtered2 = metadata.filter(sampleObject => sampleObject.id == sample);
        let result = filtered2[0];
        let samplenew = filtered[0]
        console.log(samplenew)
      
// Create variables that hold the otu_ids, otu_labels, and sample_values.
   
        let  otuIds = samplenew.otu_ids
        let  otuLabels = samplenew.otu_labels
        let  sampleValues = samplenew.sample_values
        console.log(otuIds)
        console.log(otuLabels)
        console.log(sampleValues)
    
// Variable that holds Washing freq
        let  washfreq = parseFloat(result.wfreq)
        console.log(washfreq)

// Get the the top 10 otu_ids and map them in descending order      

    let yticks = otuIds.slice(0,10).map(ids => `OTU ${ids}`).reverse();
    console.log(yticks);
    
    let barData = [{
      x: sampleValues.slice(0,10).reverse(),
      y: yticks,
      text: otuLabels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    }];

// Bar chart layout and plot 
    let barLayout = {
      title : "Top 10 Microbial Species (OTU) Found"
    };

    Plotly.newPlot("bar", barData, barLayout)

    });


// Bubble Chart
    let bubbleChart = [{
    x: otuIds, 
    y: sampleValues,
    text: otuLabels,
    mode: "markers",
    marker:{
    size: sampleValues,
    color: otuIds,
    colorscale: "Earth"
    }
    }];
// layout for the Bubble chart  
    let bubbleLayout = {
    title: "Microbial Species Per Sample",
    xaxis: {title:"OTU ID"},
    };

// plot the data with the layout.
Plotly.newPlot("bubble", bubbleData, bubbleLayout);


// Create the trace for the gauge chart.
    let gaugeData = [{
    domain: { x: [0, 1], y: [0, 1] },
    value: washfreq,
    type: "indicator",
    mode: "gauge+number",
    title: { text: "Belly Button Washing Frequency <br>Scrubs per Week " },
    gauge: {
      axis: {range:[null,10],tickwidth:2},
      steps: [
        { range: [0, 2], color: "red" },
        { range: [2, 4], color: "orange" },
        { range: [4, 6], color: "yellow" },
        { range: [6, 8], color: "lightgreen" },
        { range: [8, 10], color: "green" },
      ]

    }
    }];

    let gaugeLayout = { 
     width: 450, 
    height: 445,
     margin: { t: 0, b: 0 }
    };

//  Plotly to plot the gauge data and layout.
Plotly.newPlot("gauge", gaugeData, gaugeLayout )

};
init();