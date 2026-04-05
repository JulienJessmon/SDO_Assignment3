output "instance_ip" {
  description = "The external IP of the instance"
  value       = google_compute_instance.vm_instance.network_interface[0].access_config[0].nat_ip
}

output "instance_name" {
  description = "The name of the instance"
  value       = google_compute_instance.vm_instance.name
}

output "instance_zone" {
  description = "The zone the instance was deployed to"
  value       = google_compute_instance.vm_instance.zone
}
