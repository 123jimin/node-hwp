module.exports = function plainTextConverter(root){
	var toText = function toText(node){
		switch(node.name){
			case 'HWPML':
				return toText(node.go('BODY'));
			case 'SECTION':
				return node.children.map(toText).join('\n');
			case 'SCRIPT':
				return "[[수식: "+node.value+"]]";
			case 'CHAR':
				return node.value;
			case 'TABLE':
				return node.children.filter(function(x){return x.name == 'ROW'}).map(toText).join('\n');
			case 'ROW':
				return node.children.map(toText).join(' | ');
			default:
				return node.children.map(toText).join('');
		}
	};

	return toText(root);
};
