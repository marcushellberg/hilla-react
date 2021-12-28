package dev.hilla.demo;

import java.util.List;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;

@Endpoint
@AnonymousAllowed
public class PersonEndpoint {
  private PersonRepo repo;

  public PersonEndpoint(PersonRepo repo) {
    this.repo = repo;
  }

  public @Nonnull List<@Nonnull Person> findAll() {
    return repo.findAll();
  }

  public @Nonnull Person save(Person person) {
    return repo.save(person);
  }
}
