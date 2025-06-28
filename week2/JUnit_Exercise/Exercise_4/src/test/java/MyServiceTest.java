import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    private MyService service;
    private ExternalApi mockApi;

    @BeforeEach
    public void setUp() {
        mockApi = mock(ExternalApi.class);
        service = new MyService(mockApi);
        when(mockApi.getData()).thenReturn("Mock Setup Data");
        System.out.println("Setup done");
    }

    @AfterEach
    public void tearDown() {
        mockApi = null;
        service = null;
        System.out.println("Teardown done");
    }

    @Test
    public void testAAAStyle() {
        String result = service.fetchData();
        assertEquals("Mock Setup Data", result);
    }
}
