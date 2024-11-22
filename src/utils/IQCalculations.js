// IQCalculations.js

// Helper function needed for calculations
export function normsinv(p) {
    let a1 = -39.6968302866538;
    let a2 = 220.946098424521;
    let a3 = -275.928510446969;
    let a4 = 138.357751867269;
    let a5 = -30.6647980661472;
    let a6 = 2.50662827745924;
    let b1 = -54.4760987982241;
    let b2 = 161.585836858041;
    let b3 = -155.698979859887;
    let b4 = 66.8013118877197;
    let b5 = -13.2806815528857;
    let c1 = -7.78489400243029E-03;
    let c2 = -0.322396458041136;
    let c3 = -2.40075827716184;
    let c4 = -2.54973253934373;
    let c5 = 4.37466414146497;
    let c6 = 2.93816398269878;
    let d1 = 7.78469570904146E-03;
    let d2 = 0.32246712907004;
    let d3 = 2.445134137143;
    let d4 = 3.75440866190742;
    let p_low = 0.02425;
    let p_high = 1 - p_low;
    let q;
    let r;
    let x;
    if (p < 0 || p > 1) {
        return 0;
    } else if (p < p_low) {
        q = Math.sqrt(-2 * Math.log(p));
        x = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    } else if (p <= p_high) {
        q = p - 0.5;
        r = q * q;
        x = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    } else {
        q = Math.sqrt(-2 * Math.log(1 - p));
        x = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    return x;
}

// First three calculation functions
export function calculateTerman(value, source) {
    let x = parseFloat(value);
    switch (source) {
        case 0: return x;
        case 1: return Math.round((x - 100) * 1.2 + 100);
        case 2: return Math.round((x - 100) * 1.2 + 100);
        case 3: return Math.round(x * 15 + 100);
        case 4: return Math.round(x * 15 + 100);
        case 5: return Math.round(x * 15 + 100);
        case 6: return Math.round(normsinv(x/100) * 15 + 100);
        case 7: return Math.round(normsinv(1-x/100) * 15 + 100);
    }
}

export function calculateCattell(value, source) {
    let x = parseFloat(value);
    switch (source) {
        case 0: return Math.round((x - 100) / 1.2 + 100);
        case 1: return x;
        case 2: return x;
        case 3: return Math.round(x * 24/2.4 + 100);
        case 4: return Math.round(x * 24/2.4 + 100);
        case 5: return Math.round(x * 24/2.4 + 100);
        case 6: return Math.round(normsinv(x/100) * 24 + 100);
        case 7: return Math.round(normsinv(1-x/100) * 24 + 100);
    }
}

export function calculateWechsler(value, source) {
    let x = parseFloat(value);
    switch (source) {
        case 0: return Math.round((x - 100) / 1.2 + 100);
        case 1: return x;
        case 2: return x;
        case 3: return Math.round(x * 24/2.4 + 100);
        case 4: return Math.round(x * 24/2.4 + 100);
        case 5: return Math.round(x * 24/2.4 + 100);
        case 6: return Math.round(normsinv(x/100) * 24 + 100);
        case 7: return Math.round(normsinv(1-x/100) * 24 + 100);
    }
}

export function calculateStd(value, source) {
    let x = parseFloat(value);
    switch (source) {
        case 0: return Math.round((x - 100) / 15);
        case 1: return Math.round((x - 100) * 2.4 / 24);
        case 2: return Math.round((x - 100) * 2.4 / 24);
        case 3: return x;
        case 4: return x;
        case 5: return x;
        case 6: return Math.round(normsinv(x/100));
        case 7: return Math.round(normsinv(1-x/100));
    }
}

export function calculateGRE(value, source) {
    let x = parseFloat(value);
    switch (source) {
        case 0: return Math.round((x - 100) / 15);
        case 1: return Math.round((x - 100) * 2.4 / 24);
        case 2: return Math.round((x - 100) * 2.4 / 24);
        case 3: return x;
        case 4: return x;
        case 5: return x;
        case 6: return Math.round(normsinv(x/100));
        case 7: return Math.round(normsinv(1-x/100));
    }
}

export function calculateSAT(value, source) {
    let x = parseFloat(value);
    switch (source) {
        case 0: return Math.round((x - 100) / 15);
        case 1: return Math.round((x - 100) * 2.4 / 24);
        case 2: return Math.round((x - 100) * 2.4 / 24);
        case 3: return x;
        case 4: return x;
        case 5: return x;
        case 6: return Math.round(normsinv(x/100));
        case 7: return Math.round(normsinv(1-x/100));
    }
}