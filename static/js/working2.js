// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize the dashboard at start up 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    d3.json(url).then((data) => {
        
        // Set a variable for the sample names
        let names = data.names;

        // Add  samples to dropdown menu
        names.forEach((id) => {

            // Log the value of id for each iteration of the loop
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the first sample from the list
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build the initial plots
        buildMetadata(sample_one);
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
        buildGaugeChart(sample_one);

    });
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

// Function that builds the bar chart
function buildBarChart(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids,otu_labels,sample_values);

        // Set top ten items to display in descending order
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        // Set up the trace for the bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Setup the layout
        let layout = {
            title: "Top 10 OTUs Present"
        };

        // Call Plotly to plot the bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};

// Function that builds the bubble chart
function buildBubbleChart(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {
        
        // Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids,otu_labels,sample_values);
        
        // Set up the trace for bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Set up the layout
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        // Call Plotly to plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

// Function that updates dashboard when sample is changed
function optionChanged(value) { 

    // Log the new value
    console.log(value); 

    // Call all functions 
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
    buildGaugeChart(value);
};

// Call the initialize function
init();
//bonus

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize the dashboard at start up 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    d3.json(url).then((data) => {
        
        // Set a variable for the sample names
        let names = data.names;

        // Add  samples to dropdown menu
        names.forEach((id) => {

            // Log the value of id for each iteration of the loop
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the first sample from the list
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build the initial plots
        buildGaugeChart(sample_one);
    });
};

// Function that builds the gauge chart
function buildGaugeChart(sample) {

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

        // Use Object.entries to get the key/value pairs and put into the demographics box on the page
        let washFrequency = Object.values(valueData)[6];
        
        // Set up the trace for the gauge chart
        let trace2 = {
            value: washFrequency,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 16}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: {color: "black"},
                steps: [
                    {range: [0, 1], color: "rgba(255, 255, 255, 0)"},
                    {range: [1, 2], color: "rgba(232, 226, 202, .5)"},
                    {range: [2, 3], color: "rgba(210, 206, 145, .5)"},
                    {range: [3, 4], color:  "rgba(202, 209, 95, .5)"},
                    {range: [4, 5], color:  "rgba(184, 205, 68, .5)"},
                    {range: [5, 6], color: "rgba(170, 202, 42, .5)"},
                    {range: [6, 7], color: "rgba(142, 178, 35 , .5)"},
                    {range: [7, 8], color:  "rgba(110, 154, 22, .5)"},
                    {range: [8, 9], color: "rgba(50, 143, 10, 0.5)"},
                    {range: [9, 10], color: "rgba(14, 127, 0, .5)"},
                ]
            } 
        };

        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });
};

// Call the initialize function
init();


////////
// Place url that has the data in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// initialize the webpage
function init() {

// Fetch the JSON data and console log it. // use console.log() to print 'Data' to the console. Explore the output in the Chrome Console
d3.json(url).then(function(data) {
  console.log(data);
});

function init() {

// This function is called when a dropdown menu item is selected

    // Use D3 to select the dropdown menu
    var menuSelection = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json(url).then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        menuSelection
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json(url).then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
      d3.json(url).then((data) => {
      // 3. Create a variable that holds the samples array. 
        var samplesArray = data.samples;
        console.log(samplesArray)
      // 4. Create a variable that filters the samples for the object with the desired sample number.
        var filtered = samplesArray.filter(sampleObj => sampleObj.id == sample);
        console.log(filtered)
      //  5. Create a variable that holds the first sample in the array.
          var metadata = data.metadata;
          var filtered2 = metadata.filter(sampleObj => sampleObj.id == sample);
          var result = filtered2[0];
          var samplenew = filtered[0]
          console.log(samplenew)
        
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
     
          var otuIds = samplenew.otu_ids
          var otuLabels = samplenew.otu_labels
          var sampleValues = samplenew.sample_values
          console.log(otuIds)
          console.log(otuLabels)
          console.log(sampleValues)
      
      // Variable that holds Washing freq
          var washfreq = parseFloat(result.wfreq)
          console.log(washfreq)
      
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
      var yticks = otuIds.slice(0,10).map(ids => `OTU ${ids}`).reverse();
      console.log(yticks);
      // 8. Create the trace for the bar chart. 
      var barData = [{
        x: sampleValues.slice(0,10).reverse(),
        y: yticks,
        text: otuLabels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
      }];
  
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title : "Top 10 Microbial Species (OTU) Found in Samples (Persons)"
      };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout)
    
      // 1. Create the trace for the bubble chart.
      var bubbleData = [{
        x: otuIds , 
        y: sampleValues,
        text: otuLabels,
        mode: "markers",
        marker:{
          size: sampleValues,
          color: otuIds,
          colorscale: "Earth"
        }
      }];
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title: "Microbial Species Per Sample (Person)",
        xaxis: {title:"OTU ID"},
      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
      
      // Create the trace for the gauge chart.
      var gaugeData = [{
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
      
      //  Create the layout for the gauge chart.
      var gaugeLayout = { 
        width: 450, 
        height: 445,
        margin: { t: 0, b: 0 }
      };
      
      //  Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge", gaugeData, gaugeLayout );
    });
  }
}
init();


// // Function that builds the bar chart
// function buildBarChart(sample) {

//     // Use D3 to retrieve all of the data
//     d3.json(url).then((data) => {

//         // Retrieve all sample data
//         let sampleInfo = data.samples;

//         // Filter based on the value of the sample
//         let value = sampleInfo.filter(result => result.id == sample);

//         // Get the first index from the array
//         let valueData = value[0];

//         // Get the otu_ids, lables, and sample values
//         let otu_ids = valueData.otu_ids;
//         let otu_labels = valueData.otu_labels;
//         let sample_values = valueData.sample_values;

//         // Log the data to the console
//         console.log(otu_ids,otu_labels,sample_values);

//         // Set top ten items to display in descending order
//         let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
//         let xticks = sample_values.slice(0,10).reverse();
//         let labels = otu_labels.slice(0,10).reverse();
        
//         // Set up the trace for the bar chart
//         let trace = {
//             x: xticks,
//             y: yticks,
//             text: labels,
//             type: "bar",
//             orientation: "h"
//         };

//         // Setup the layout
//         let layout = {
//             title: "Top 10 OTUs Present"
//         };

//         // Call Plotly to plot the bar chart
//         Plotly.newPlot("bar", [trace], layout)
//     });
// };

// // Function that builds the bubble chart
// function buildBubbleChart(sample) {

    // Use D3 to retrieve all of the data
    // d3.json(url).then((data) => {
        
    //     // Retrieve all sample data
    //     let sampleInfo = data.samples;

    //     // Filter based on the value of the sample
    //     let value = sampleInfo.filter(result => result.id == sample);

    //     // Get the first index from the array
    //     let valueData = value[0];

    //     // Get the otu_ids, lables, and sample values
    //     let otu_ids = valueData.otu_ids;
    //     let otu_labels = valueData.otu_labels;
    //     let sample_values = valueData.sample_values;

    //     // Log the data to the console
    //     console.log(otu_ids,otu_labels,sample_values);
        
//         // Set up the trace for bubble chart
//         let trace1 = {
//             x: otu_ids,
//             y: sample_values,
//             text: otu_labels,
//             mode: "markers",
//             marker: {
//                 size: sample_values,
//                 color: otu_ids,
//                 colorscale: "Earth"
//             }
//         };

//         // Set up the layout
//         let layout = {
//             title: "Bacteria Per Sample",
//             hovermode: "closest",
//             xaxis: {title: "OTU ID"},
//         };

//         // Call Plotly to plot the bubble chart
//         Plotly.newPlot("bubble", [trace1], layout)
//     });
// };