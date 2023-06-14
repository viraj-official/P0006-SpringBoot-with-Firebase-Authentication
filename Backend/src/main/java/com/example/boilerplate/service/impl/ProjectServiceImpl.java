package com.example.boilerplate.service.impl;

import com.example.boilerplate.model.Project;
import com.example.boilerplate.repository.ProjectRepository;
import com.example.boilerplate.service.ProjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public List<Project> viewAll() {
        return projectRepository.findAll();
    }
}