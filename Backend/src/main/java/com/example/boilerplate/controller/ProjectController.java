package com.example.boilerplate.controller;

import com.example.boilerplate.model.Project;
import com.example.boilerplate.model.User;
import com.example.boilerplate.service.ProjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@Validated
@RestController
@RequestMapping(path = "project")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/all")
    public List<Project> view_all_users(@AuthenticationPrincipal User user) {
        return projectService.viewAll();
    }
}