variable "aws_region" {
  default = "us-east-1"
}

variable "ecr_repository" {
  default = "730335464213.dkr.ecr.us-east-1.amazonaws.com/auth-system-backend"
}

variable "container_name" {
  default = "auth-system-backend"
}

variable "container_port" {
  default = 3000
}

variable "ecs_cluster_name" {
  default = "auth-cluster"
}
