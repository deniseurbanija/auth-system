resource "aws_lb" "auth_lb" {
  name               = "auth-load-balancer"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets           = aws_subnet.public[*].id
}

resource "aws_lb_target_group" "auth_tg" {
  name     = "auth-target-group"
  port     = var.container_port
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
  target_type = "ip"
}
