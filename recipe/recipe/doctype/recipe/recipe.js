// Copyright (c) 2023, IDK and contributors
// For license information, please see license.txt

frappe.ui.form.on('Recipe', {
	// refresh: function(frm) {

	// }
	"category": function(frm) {
        frm.set_query('sub_category', () => {
            return {
                filters: {
                    category: cur_frm.doc.category,
                    
                }
            }
        });
    },
	"sub_category": function(frm) {

		var category1;
		frappe.db.get_value('Sub Category', cur_frm.doc.sub_category, ['category']).then(r => {
			category1 = r.message.category;
			frm.set_value({
				category: category1,
				
			})})
        
    },
});
