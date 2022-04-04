package main.employees.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import main.employees.model.Radnici;

public interface RadniciRepository extends JpaRepository<Radnici, Long> {
    List<Radnici> findByIme(String ime);

    List<Radnici> findByPrezime(String prezime);

}
