var tree = [];

function assert(assertion) {
  if (assertion) throw new Error();
}

function createTree(a, v, tl, tr) {
	if (tl == tr) 
    tree[v] = a[tl];

	else {
		let tm = Math.floor((tl + tr)/2);
		createTree(a, v*2, tl, tm);
		createTree(a, v*2+1, tm+1, tr);
		tree[v] = tree[v*2] + tree[v*2+1];
	}
}

function applyFn (v, tl, tr, l, r, fn) {
	if (l <= tl && tr <= r)
    return tree[v];

  if (tr < l || r < tl)
    return 0;

	tm = Math.floor((tl + tr) / 2);
  return fn(applyFn(v*2, tl, tm, l, Math.min(r, tm), fn), 
    applyFn(v*2+1, tm+1, tr, Math.max(l, tm+1), r), fn);
}

function segmentTree(array, fn, N) {
  createTree(array, 1, 0, array.length-1);
  return (from, to) => {

    assert(from > to);
    assert(from < 0 || to < 0);
    assert(from > array.length || to > array.length);

    if (from == to) return N;

    return applyFn(1, 0, array.length-1, from, to, fn);
  }
  
};

function recursiveSegmentTree(array, fn, N) {
  return segmentTree(array, fn, N);
}

function getElfTree(array) {
  return recursiveSegmentTree(array, sum, 0);
}

function assignEqually(tree, wishes, stash, elves, gems, week) {
  return {};
}

function assignAtLeastOne(tree, wishes, stash, elves, gems, week) {
  return {};
}

function assignPreferredGems(tree, wishes, stash, elves, gems) {
  return {};
}

function nextState(state, assignment, elves, gems) {
  return state;
}