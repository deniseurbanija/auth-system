resource "aws_ecs_cluster" "auth_cluster" {
  name = var.ecs_cluster_name
}

resource "aws_ecs_task_definition" "auth_task" {
  family                   = "auth-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn
  container_definitions = jsonencode([
    {
      name      = var.container_name
      image     = "${var.ecr_repository}:latest"
      cpu       = 256
      memory    = 512
      essential = true
      portMappings = [
        {
          containerPort = var.container_port
          hostPort      = var.container_port
        }
      ]
    }
  ])
}
