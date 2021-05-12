import { FiniteFieldMultiply } from './core';


export const Chart = (n) => {
    const a = [(n + 1) * n];
    for (let t = 0; t < n; t++) {
        for (let u = 0; u < n; u++) {
            a[t * n + u] = {
                label: `${t}x+${u}`,
                showLine: true,
                borderColor: `rgba(${80*(3-t%3)}, ${80*(t)}, ${80*(t%3+1)}, 1)`,
                pointRadius: 5,
                pointHitRadius: 5,
                cubicInterpolationMode: 'monotone',
                data: new Array(n)
            };
            for (let x = 0; x < n; x++) {
                a[t * n + u].data[x] = (n % 2) ? {x, y: (t * x + u) % n} : {x, y: (FiniteFieldMultiply(t, x, n*n) ^ u)};
            }
        }
    }
    for (let x = 0; x < n; x++) {
        a[(n+1)*(n-1)+x+1] = {
            label: `inf${x}+`,
            showLine: true,
            borderColor: `rgba(${80*(1-n%2)}, ${80*(n)}, ${80*(n%2)}, 1)`,
            pointRadius: 5,
            pointHitRadius: 5,
            cubicInterpolationMode: 'monotone',
            data: new Array(n)
        };
        for (let y = 0; y < n; y++) {
            a[(n+1)*(n-1)+x+1].data[y] = {x: x, y: y};
        }
    }

    return {
        labels: ['Scatter'],
        datasets: a
    };
};

export const Options = {
    responsive: true,
    aspectRatio: 1,
    animation: false,
    scales: {
        y: {
            ticks: {
                stepSize: 1
            }
        },
        x: {
            ticks: {
                stepSize: 1
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false
        }
    }
};
