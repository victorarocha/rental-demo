// Copyright (c) 2024, Victor and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
        console.log("running load...");
    },
	refresh(frm) {
        console.log("running refresh...");
        if (frm.doc.status !== "Accepted") {
            frm.add_custom_button("Accept", () => {
            frm.set_value("status", "Accepted");
            frm.save();
        })
        }
        

	},
    status(frm) {
        console.log("status changed");
    }
});
