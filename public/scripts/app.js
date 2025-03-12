import Chart from "chart.js/auto";
fetch("/api/data")
    .then(response => response.json())
    .then(data => {
    const ctx = document.getElementById("chart");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map((d) => d.label),
            datasets: [{
                    label: "Values",
                    data: data.map((d) => d.value),
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
        }
    });
});
