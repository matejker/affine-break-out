export const PRIMES = [1, 2, 3, 4, 5, 7, 8, 11];


export const ClosestPrimeSqrt = (m) => {
    let n = PRIMES.slice(-1)[0];
    for (let p in PRIMES.reverse()) {
        if (PRIMES[p] * PRIMES[p] >= m) {
            n = PRIMES[p];
        } else {
            return n;
        }
    }
};

export const FiniteFieldMultiply = (a, b, m) => {
    let r = 11;
    let d = 2;

    if (m == 16) {
        r = 7;
        d = 1;
    }

    let prod = 0;
    let temp_a = a;
    let temp_b = b;
    while (temp_a && temp_b) {
        if (temp_b & 1) {
            prod = prod ^ temp_a;
        }

        temp_b = temp_b >> 1;

        if (temp_a & (1 << d)) {
            temp_a = (temp_a << 1) ^ r;
        } else {
            temp_a = temp_a << 1;
        }
    }
    return prod;
};

export const AffineBreakOut = (m) =>  {
    const SkipReminder = (k) => {
        return (k < m) ? k : "N";
    };

    const n = ClosestPrimeSqrt(m);
    let rounds = [n + 1];
    for (let i = 0; i < n + 1; i++) {
        rounds[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            rounds[i][j] = new Array(n);
        }
    }

    if (n === 4 || n === 8) {
        for (let t = 0; t < n; t++) {
            for (let u = 0; u < n; u++) {
                for (let x = 0; x < n; x++) {
                    rounds[t][u][x] = SkipReminder(x + ((FiniteFieldMultiply(t, x, m) ^ u) * n));
                }
            }
        }
    } else {
        for (let t = 0; t < n; t++) {
            for (let u = 0; u < n; u++) {
                for (let x = 0; x < n; x++) {
                    rounds[t][u][x] = SkipReminder(x + ((t * x + u) % n) * n);
                }
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
