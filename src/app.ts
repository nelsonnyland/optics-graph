import Chart from "chart.js/auto";

fetch("/api/data")
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById("chart") as HTMLCanvasElement;
        new Chart(ctx, {
            type: "line",
            data: {
                labels: data.map((d: any) => d.label),
                datasets: [{
                    label: "Values",
                    data: data.map((d: any) => d.value),
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            }
        })
    })