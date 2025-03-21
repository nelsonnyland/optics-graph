import Chart from "chart.js/auto";

const BASE_URL = process.env.BACKEND_URL;

interface Optics {
    element: String,
    sp_num: Number
}

console.log(`Fetching data from ${BASE_URL}/api/data...`);
fetch(`${BASE_URL}/api/data`)
    .then(response => response.json())
    .then(data => {
        const opticsArray = data as Optics[];
        //opticsArray.forEach(item => console.log(item));
        const ctx = document.getElementById("chart") as HTMLCanvasElement;
        new Chart(ctx, {
            type: "line",
            data: {
                labels: opticsArray.map(d => d.element),
                datasets: [{
                    label: "Values",
                    data: opticsArray.map(d => d.sp_num),
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            }
        })
    });