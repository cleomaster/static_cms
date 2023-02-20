var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Computer Science",
        backgroundColor: "red",
        borderColor: "green",
        data: [20],
      },
      {
        label: "BBA",
        backgroundColor: "blue",
        borderColor: "pink",
        data: [6],
      },
      {
        label: "Software Engineering",
        backgroundColor: "Yellow",
        borderColor: "blue",
        data: [10],
      },
      {
        label: "Computer Engineering",
        backgroundColor: "Pink",
        borderColor: "red",
        data: [5],
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: true,
    },
  },
});