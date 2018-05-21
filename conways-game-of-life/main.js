const main = () => tick(genMatrix(30), 57);

const enoughNeighbors = (m, i, j) => {
    let n = 0;
    if (i > 1 && i < 28 && j > 1 && j < 28) {		// dead zone
        n += m[i-1][j-1];			n += m[i][j-1];			n += m[i+1][j-1];
        n += m[i-1][j];														n += m[i+1][j];
        n += m[i-1][j+1];			n += m[i][j+1];			n += m[i+1][j+1];
    }
    if (n == 2) return m[i][j];		// if 2 neighbors, keep status
    if (n == 3) return 1;		// if 3 neighbors, come alive
    else return 0;
};

const genCell = status => {
    let e = document.getElementById('container').appendChild(document.createElement('div'));
    e.className = 'cell';
    e.style.backgroundColor = status ? '#0a0a0a' : '#8bc12b';		// Changes cell color based on status 0/1
    return status;
};

const genGrid = m => {
    document.getElementById('container').innerHTML = '';
    return m.map( n => n.map(x => genCell(x) ) );		// Creates cells according to matrix values
};

const genMatrix = size => {
    let m = Array(size).fill( Array(size).fill(0) );	// Creates a matrix of zeros
    return m.map(  n => n.map( () => Math.floor(Math.random() * 2) )  );	// Fills it with random binaries
};

const tick = (m, i) => {
    if (i < 0) return;
    m = updateMatrix(genGrid(m));
    document.getElementById('count').innerHTML = i;
    return requestAnimationFrame(() => tick(m, i-1));
};

const updateMatrix = m => m.map( (n,i) => n.map( (cell,j) => enoughNeighbors(m, i, j) ) );
