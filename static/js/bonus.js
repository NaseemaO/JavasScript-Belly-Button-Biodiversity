// Optional Bonus part of the assignment is to create a Gauge Chart for the Test Subject's Washing Frequency of the Naval 

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
        
        // Set up the trace for the gauge chart.  Corors from ColorBrewer: Color Advice for Maps (colorbrewer2.org)
        let trace2 = {
            domain: { x: [0, 1], y: [0, 1] },
            type: 'pie',
            showlegend: false,
            hole: 0.4,
            rotation: 90,
            value: washFrequency,
            text: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 16}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [null,10], tickmode: "linear", tick0: 1, dtick: 1},
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
            width: 500, 
            height: 500,
            margin: {t: 0, b:0}
        };

        // Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });    
}