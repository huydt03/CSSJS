const CSSJS = (()=>{

	const CHAR_START = '{', CHAR_END = '}';

	function cssContentToObj(css){
	    if(!css) return {};
	    let result = {};
	    let patern_item = /(.*?):(.*?);/g;
	    css.replace(patern_item, function(m, _g1, _g2){
	        result[_g1.trim()] = _g2.trim();
	    })
	    return result;
	}

	function objContentToCss(obj, space = '\t'){
	   let css = Object.keys(obj).reduce((acc, key) => (
	        acc + space + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + obj[key] + ';'
	    ), '');
	   css = css.replaceAll('\n', '').replaceAll(';', ';\n');
	   return css;
	}

	function objToCss(obj){
		let css = '';
		for(let i in obj){
			let item = obj[i];
			if(typeof item[Object.keys(item)[0]] == 'object')
				css += `${i}{\n${objToCss(item)}}\n`;
			else
				css += `${i}{\n${objContentToCss(item)}}\n`;
		}

		return css;
	}

	function cssToJs(css){

		if(!css) return {};

		let _css = css.replace(/\/\*.*?\*\//gs, '');

		let has_child = 0;
		let result = {};
		let pattern = /([\s\S]+?){(.*?)}/sg;
		let tmp_value = '';
		let tmp_id = '';
		_css.replace(pattern, (m, g1, g2)=>{
			if(g2.includes(CHAR_START) && !has_child){
				has_child = 1;
				tmp_id = g1;
				m = g2+CHAR_END;
			}
			if(has_child){
				if(g1.includes(CHAR_END)){
					result[[tmp_id.trim()]] = cssToJs(tmp_value)
					if(!g2.includes(CHAR_START)){
						result[[g1.replace(CHAR_END, '').trim()]] = cssContentToObj(g2);
						tmp_value = '';
						has_child = 0;
					}else{
						tmp_id = g1.replace(CHAR_END, '').trim();
						tmp_value = g2+CHAR_END;
					}
				}else{
					tmp_value += m;
				}
			}
			else
				result[[g1.trim()]] = cssContentToObj(g2);
		});

		if(has_child)
			result[[tmp_id.trim().replace(CHAR_END, '')]] = cssToJs(tmp_value)

		return result;
	}

	return {toCss: objToCss, toJs: cssToJs};

})();