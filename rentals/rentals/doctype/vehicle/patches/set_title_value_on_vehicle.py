
import frappe

def execute():
	"""set title value on vehicle"""
	# Write your patch here.
	vehicles = frappe.db.get_all("Vehicle", pluck="name")
	for v in vehicles:
		vehicle = frappe.get_doc("Vehicle", v)
		vehicle.set_title()
		vehicle.save()
	frappe.db.commit()

