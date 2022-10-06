#!/bin/bash -xe
kubectl apply -f postgres-config.yaml 
kubectl get configmap
kubectl apply -f postgres-pvc-pv.yaml 
kubectl get pvc
kubectl apply -f postgres-deployment.yaml 
kubectl get deployments
kubectl apply -f postgres-service.yaml 
kubectl get all
