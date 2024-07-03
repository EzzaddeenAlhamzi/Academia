// Copyright (c) 2024, SanU and contributors
// For license information, please see license.txt

function handle_checkboxes(frm, selected_fieldname){
    const checkbox_fields = [
        'saturday',
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday'
    ];

    checkbox_fields.forEach(fieldname => {
        if (fieldname !== selected_fieldname){
            frm.set_value(fieldname, 0);
        }
    });
}

frappe.ui.form.on("Lesson Template", {
	refresh(frm) {

	},
    saturday: function(frm){
        if (frm.doc.saturday) {
            handle_checkboxes(frm, 'saturday');
        }
    },
    sunday: function(frm){
        if (frm.doc.sunday) {
            handle_checkboxes(frm, 'sunday');
        }
    }
});
