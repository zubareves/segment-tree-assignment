
var tree = []; 

function createTree(a, v, tl, tr) {
	if (tl == tr) {
    tree[v] = a[tl];
  }
	else {
		let tm = Math.floor((tl + tr)/2);
		createTree(a, v*2, tl, tm);
		createTree(a, v*2+1, tm+1, tr);
		tree[v] = tree[v*2] + tree[v*2+1];
	}
}

function getSum(v, tl, tr, l, r) {
	if (l <= tl && tr <= r)
    return tree[v];

  if (tr < l || r < tl)
    return 0;

	tm = Math.floor((tl + tr) / 2);
  return getSum(v*2, tl, tm, l, Math.min(r, tm)) + 
		getSum(v*2+1, tm+1, tr, Math.max(l, tm+1), r);
}

function segmentTree(array) {
	createTree(array, 1, 0, array.length-1);
	return (from, to) => getSum(1, 0, array.length-1, from, to);
}

newTree = segmentTree([1, 2, 3]);

newTree(0, 1);