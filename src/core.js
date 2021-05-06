export const AffineBreakOut = (m) =>  {
    const PRIMES = [1, 2, 3, 5, 7, 11];

    const ClosestPrimeSqrt = () => {
        let n = PRIMES.slice(-1)[0];
        for (let p in PRIMES.reverse()) {
            if (PRIMES[p] * PRIMES[p] >= m) {
                n = PRIMES[p];
            } else {
                return n;
            }
        }
    };

    const SkipReminder = (k) => {
        return (k < m) ? k : "N";
    };

    const n = ClosestPrimeSqrt();
    let rounds = [n + 1];
    for (let i = 0; i < n + 1; i++) {
        rounds[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            rounds[i][j] = new Array(n);
        }
    }

    // y = t * x + u

    for (let t = 0; t < n; t++) {
        for (let u = 0; u < n; u++) {
            for (let x = 0; x < n; x++) {
                rounds[t][u][x] = SkipReminder(x + ((t * x + u) % n) * n);
            }
        }
    }

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            rounds[n][x][y] = SkipReminder(x + y * n);
        }
    }

    return rounds
};
